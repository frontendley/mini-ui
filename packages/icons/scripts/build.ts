import path from "path"
import fs from "fs/promises"
import svgo, { Config } from "svgo"
import { delExt, kebab2Camel } from "./utils";

interface IconRecord {
  fileName: string;
  fileContent: string;
}

const SVGO_CONFIG: Config = {
  plugins: [
    'removeUnknownsAndDefaults',
    'cleanupAttrs',
    'removeXMLNS',
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    'removeUselessDefs',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeHiddenElems',
    'removeEmptyText',
    'removeEmptyContainers',
    // 'removeViewBox',
    'cleanupEnableBackground',
    'convertStyleToAttrs',
    'convertColors',
    'convertPathData',
    'convertTransform',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'removeUnusedNS',
    'cleanupIds',
    'cleanupNumericValues',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    // 'removeRasterImages',
    'mergePaths',
    'convertShapeToPath',
    'sortAttrs',
    'removeDimensions',
    {
      name: "addAttributeToSvg",
      fn: () => {
        return {
          element: {
            enter: (node) => {
              if(node.name === "svg")
                node.attributes.customProps = ""
            }
          }
        }
      }
    }
  ]
}


function normalizeSvgAttrs(data: string) {
  return svgo.optimize(data, SVGO_CONFIG)
    .data
    .replace(/customProps=""/g, '{...defaultProps}')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
    .replace(/class=/g, 'className=');

}

async function travelPath(basePath: string) {
  const res: IconRecord[] = []
  const basicDirs = await fs.readdir(basePath)
  for (const target of basicDirs) {
    const combinedPath = path.join(basePath, target)
    const targetStat = await fs.stat(combinedPath)
    if (targetStat.isDirectory()) {
      res.push(...(await travelPath(combinedPath)))
    }

    if (targetStat.isFile() && combinedPath.endsWith(".svg")) {
      const content = await fs.readFile(combinedPath, 'utf-8')
      res.push({
        fileName: kebab2Camel(delExt(target)),
        fileContent: normalizeSvgAttrs(content)
      })
    }
  }

  return res
}

function iconTemplate({ fileName, fileContent }: IconRecord) {
  return ` // 本文件由 "@mini-ui/icons/scripts/build.ts" 生成， 禁止手动修改!
import type { IconProps } from "../../index.d.ts"
export function Icon${fileName} (props: IconProps): JSX.Element {
  const {
    className = "",
    spin,
    style,
    component: Component,
    children,
    ...rest
  } = props
  // 处理className
  const classNames = className + (spin ? "mini-icon-spin" : "")
  // 属性合并
  const defaultProps:IconProps = {
    width: "1em",
    height: "1em",
    fill: "currenColor",
    className: classNames,
    ...rest
  }

  return (
    ${fileContent}
  )
}
  `
}

async function generateIcon(records: IconRecord[]) {
  async function generateFile(record: IconRecord) {
    const targetPath = path.join(__dirname, "..", "src", "components", record.fileName + ".tsx")
    const template = iconTemplate(record)
    fs.writeFile(targetPath, template)

    console.log("has generated " + record.fileName + "component")
  }

  records.forEach(generateFile)
}

async function generateExportModule(records: IconRecord[]) {
  const targetPath = path.join(__dirname, "..", "src", "components", "index.tsx")
  const exportStr = records.map(item => `export { Icon${item.fileName} } from "./${item.fileName}"`).join('\n')
  fs.writeFile(targetPath, exportStr)
  console.log("has generated export file")
}

async function main() {
  const basePath = path.join(__dirname, "..", "svgs")
  const fileRecords = await travelPath(basePath)

  // generateIcon
  generateIcon(fileRecords)
  generateExportModule(fileRecords)

}

main()