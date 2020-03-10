import { OrientDBClient, ODatabase } from 'orientjs'

const db = new ODatabase({
    host: 'localhost',
    port: 2424,
    name: 'notes',
    username: 'test',
    password: 'test'
})

const client = new OrientDBClient({
    host: 'localhost',
    port: 2424,
})

async function main() {
    await client.connect()
    const sessesion = await client.session({
        username: 'root',
        password: 'root_pwd',
        name: "abc"
    })


    await client.createDatabase({
        name: 'test',
        password: 'test',
        username: 'test',
        type: "graph",
        storage: "plocal"
    })

}

async function main2() {
    // 1. Connect
    await db.open()
    // 2. Create database if not exists
    //???
    // 3. Create classe if not exists
    await db.class.create('tag')
    await db.class.create('note')
    // 4. Create vertexes if not exists
    db.create('VERTEX', 'tagged')

}


