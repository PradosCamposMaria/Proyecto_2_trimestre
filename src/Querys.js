     
/*Calcula el precio de todos los pedidos realizados por el vendedor Estrella*/

db.pedidospizza.aggregate([
    {$match: {Vendedor: "Estrella"}}
])

/*Calcula el precio de los pedidos del mes de febrero*/

db.pedidospizza.aggregate([
    {$match: {FechaVenta: {"$gt": new Date("2022-01-31"), "$lt": new Date("2022-02-28")}}}
])


/*Filtrar todos los productos con forma de entrega en local*/
db.pedidospizza.aggregate([
    {$match: {FormaEntrega: "Local"}}
])


/*Quitar el array del pedido 5*/
db.pedidospizza.aggregate([
    {$unwind: "$Venta"},
    {$match: {id:05}},
])

/*Unwind ventas y group x productos*/

db.pedidospizza.aggregate([
    
    {$unwind: "$Venta"},
    {$group: {_id:"$Venta.Producto"}}])

/*Calcular el precio medio articulo*/
    db.pedidospizza.aggregate([
    
        {$unwind: "$Venta"},
        {$group: {_id:"$Venta.Producto",
        PrecioMedioArticulo: {$avg: "$Venta.PrecioVenta"}}}])

/*Precio Medio por articulo en un pedido (por unidad)*/ 
db.pedidospizza.aggregate([
    
            {$unwind: "$Venta"},
            {$group: {_id:"$id",
            TotalxUnidadProducto: {$sum: "$Venta.PrecioVenta"},
            PrecioMedioArticulo: {$avg: "$Venta.PrecioVenta"}}}])
       

/*Calcula el precio total sin iva, del pedido 5*/
db.pedidospizza.aggregate([
        {$unwind: "$Venta"},
        {$match: {"id":05}},
        {$group: {_id: "$Producto",
        TotalxPedido: {$sum: {$multiply: ["$Venta.PrecioVenta", "$Venta.Unidades"]}}}}])


/

/*Separar colecciones*/

db.pedidospizza.aggregate([
    {$unwind:"$venta"},
    {$project:{"id":1,"venta":1}},
    {$out:{db:"test",coll:"productospizza"}}
])

db.pedidospizza.aggregate([
    {$unwind: "$Cliente"},
    {$project: {_id:0, "Cliente": 1, "Vendedor": 1, "FechaVenta": 1, "FormaEntrega": 1}},
    {$out:{db:"test", coll:"clientespizza"}}
])

/*Unir las 2 colecciones*/
db.clientespizza.aggregate([
    {
        $lookup: {
        from: 'productospizza',
        localField: 'id',
        foreignField: 'id',
        as: 'venta'
       }
    },
    {
        $addFields: {
        Preciototal: {$multiply: ["$PrecioVenta", "$unidades"]},
             }}])


