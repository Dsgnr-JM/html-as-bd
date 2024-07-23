import fs, { readFile } from "fs"

const getTable = (nameBd) => {
    const file = fs.readFileSync(`bd/${nameBd}.html`, "utf8")
    if (!file) throw Error("No se pudo seleccionar")
    return [file.replaceAll("\n", "").replaceAll("  ", ""), nameBd];
}
const readTable = (table) => {
    let columns = table.match(/<thead>(.*?)<\/thead>/)[1].match(/<tr>(.*?)<\/tr>/gi).map(tr => tr.match(/<td>(.*?)<\/td>/gi).map(row => row.replace(/<\/?td>/g, "")))[0]
    let rows = table.match(/<tbody>(.*?)<\/tbody>/)[1].match(/<tr>(.*?)<\/tr>/gi).map(tr => tr.match(/<td>(.*?)<\/td>/gi).map(row => row.replace(/<\/?td>/g, "")))
    let tableResult = []

    rows.forEach((row => {
        let tableProperties = {}
        columns.forEach((column, index) => {
            tableProperties[column] = row[index]
        })
        tableResult.push(tableProperties)
    }))
    return tableResult
}
const createTable = (name, params) => {
    let table = params

    if(typeof params === "object"){
        let maxColumn = params.reduce((acc, item) => {
            return Object.keys(item).length > acc ? Object.keys(item).length : acc
        },0);
        let head = Object.keys(params.find(item => Object.keys(item).length === maxColumn))
        let headContent = "";
        let bodyContent = "";

        for(let i= 0; i < maxColumn; i++){
            headContent += `<td>${head[i]}</td>`
        }
        headContent = `<thead><tr>${headContent}</tr></thead>`
        params.forEach(param => {
            bodyContent += "<tr>"
            Object.values(param).map(item => {
                bodyContent += `<td>${item}</td>`
            })
            bodyContent += "</tr>"
        })
        bodyContent = `<tbody>${bodyContent}</tbody>` 
        table = `<table>${headContent + bodyContent}</table>`

    }
    fs.writeFileSync(`bd/${name}.html`,table,{
        encoding:"utf8"
    })
}

const updateTable = (table,id,params) => {
    const data = readTable(table)
    let maxColumn = data.reduce((acc, item) => {
            return Object.keys(item).length > acc ? Object.keys(item).length : acc
        },0);
    let key = Object.keys(data.find(item => Object.keys(item).length === maxColumn))[0]
    let index;
    let rowSelected = data.find((row, i) => {
        if(row[key] === id){
            index = i
            return true
        }
    })
    let rowUpdate = {}
    Object.keys(rowSelected).forEach(column => {
        rowUpdate[column] = params[column] ?? rowSelected[column]
    })
    data[index] = rowUpdate
    createTable(name,data)

    return "Update correct"
}

const deleteTable = (table, id) => {
    const data = readTable(table)
    let maxColumn = data.reduce((acc, item) => {
            return Object.keys(item).length > acc ? Object.keys(item).length : acc
        },0);
    let key = Object.keys(data.find(item => Object.keys(item).length === maxColumn))[0]
    table = data.filter(row => row[key] !== id)
    createTable(name, table)

    return "Delete correct"
}

const insertTable = (table,params) => {
    const data = readTable(table)
    let maxColumn = data.reduce((acc, item) => {
            return Object.keys(item).length > acc ? Object.keys(item).length : acc
        },0);
    let head = Object.keys(data.find(item => Object.keys(item).length === maxColumn))
    let rowInsert = {}
    for(let i = 0; i < maxColumn; i++){
        rowInsert[head[i]] = params[head[i]]
    }
    createTable(name, [...data,rowInsert])

    return "Insert correct"

    // Object.keys(rowSelected).forEach(column => {
    //     rowInsert[column] = params[column] ?? rowSelected[column]
    // })
    // data[index] = rowInsert
    // createTable(name,data)
}

const [table, name] = getTable("products")
// console.log(readTable(table))
//createTable("authors", [{id: 1, description: "Nueva publicacion", username: "jotadev"},{id: 2, description: "Publicacion del blog", username: "midudev"}])

// const user = {name: "El maestro de almas",username: "frontendMaster",password: 1234}

const product = {
    codigo: "0024",
    nombre: "Windows 11 Ultimate DDR11",
    precio: 5.00
}

//console.log(readTable(table))
//console.log(insertTable(table,product))
// console.log(updateTable(table, product.codigo, product))
console.log(readTable(table))