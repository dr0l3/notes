import * as fs from 'fs'
import {
    Client,
    RequestParams,
    ApiResponse,
} from '@elastic/elasticsearch'

import showdown from 'showdown'
const converter = new showdown.Converter({ 'tables': true })

const client = new Client({ node: 'http://localhost:9200' })

const postsBasePath = "./posts/"
const tagRegex = /(?<=tags:\s)(.*)/g
const topicRegex = /(?<=topic:\s)(.*)/g
const headingsRegex = new RegExp(/(?<=#)(.*)/gm)
const textReplacementRegex = /---(\s|.)*?---\s*/

async function main() {
    const files = fs.readdirSync(postsBasePath)

    const promises = files.map(async fileName => {
        const contents = fs.readFileSync(`${postsBasePath}${fileName}`, "utf-8")


        const tags = (contents.match(tagRegex)?.[0])?.split(",")?.map(v => v.trim())
        const topic = contents.match(topicRegex)?.[0]
        const headings = contents.match(headingsRegex)?.map(v => v.replace(/#*/g, "").trim())
        const text = contents.replace(textReplacementRegex, "")
        const html = converter.makeHtml(text)

        const payload = {
            index: 'posts3',
            body: {
                text: text,
                filename: fileName,
                tags: tags,
                topic: topic,
                headings: headings,
                html: html
            }
        }

        console.log(JSON.stringify(payload, null, 4))

        return await client.index(payload).catch(e => console.log(e))
    })

    return await Promise.all(promises)
}

main()