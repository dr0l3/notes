import * as glob from 'glob'
import * as fs from 'fs'

const idRegex = /(?<=(id: )).*/
const topicRegex = /(?<=(topic: )).*/
const tagsRegex = /(?<=(tags: )).*/

const files = glob.sync("*/*.md", {})

files.forEach(file => console.log(file))

const data = files.map(file => {
    const contents = fs.readFileSync(file, "utf-8")

    const id = Array.from((idRegex
        .exec(contents) || []))

    const topic = Array.from((topicRegex.exec(contents)) || [])
    const tags = Array.from((tagsRegex.exec(contents)) || [])


    const output = {
        id: id[0],
        topic: topic[0],
        tags: tags[0].split(",").map(s => s.trim())
    }

    console.log(JSON.stringify(output))
    return output
})

const tags = [...new Set(data.map(d => d.tags).flat())]

console.log(tags)

fs.writeFileSync("./etl/tags.csv", ["name", ...tags].join("\n"))