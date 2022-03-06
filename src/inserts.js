db.pedidospizza.drop();
db.pedidospizza.insertMany([
    {
        id:01, 
        Venta:[
            {
                Producto:"Pizza Jamonera", 
                Tamaño: "Mediana", 
                PrecioVenta: 10.90, 
                PrecioCoste:3.50, 
                Unidades:2, 
                Extras: {
                        extra_queso: true, 
                        masa_fina: false, 
                        salsa_texmex: false, 
                        bordes_rellenos: true
                    }
            }, 
            {
                Producto: "Cerveza", 
                Tamaño: "33cl", 
                PrecioVenta: 2, 
                PrecioCoste: 0.50, 
                Unidades: 1, 
                Extras: {
                    sin_alcohol: false
                }
            }, 
            {
                Producto: "Alitas de pollo", 
                Tamaño: "4u", 
                PrecioVenta: 3.50, 
                PrecioCoste: 1.60, 
                Unidades: 1, 
                Extras: {
                        salsa: "barbacoa"
                }
            }
        ], 

        IVA: 0.21, 
        Cliente:[
               {
                   Nombre:"Antonio"
                },
               {
                   Tlf: "584123958"
                }
        ], 
        Vendedor: "Luis Santos",
        FechaVenta: new Date("2022-01-10"), 
        FormaEntrega: "Recoger"
    },

    {
        id:02, 
        Venta:[
            {
                Producto:"Pizza Rodeo",
                Tamaño: "familiar", 
                PrecioVenta: 13.90, 
                PrecioCoste:5.50, 
                Unidades:1, 
                Extras:{
                    extra_queso: false, 
                    masa_fina: false,
                    salsa_texmex: true,
                    bordes_rellenos: false
                    }
            }, 
            {
                Producto: "Refrescos", 
                Tamaño: "33cl", 
                PrecioVenta: 2, 
                PrecioCoste: 0.60, 
                Unidades: 3, 
                    Extras: 
                        {sin_azucar: true}
            }, 
            {
                Producto: "Helado",
                PrecioVenta: 3.50,
                PrecioCoste: 1,
                Unidades: 2
            }
        ], 
        IVA: 0.21, 
        Cliente:[
            {
                Nombre:"Tomás"
            },
            {
                Tlf: "124585236"
            }
        ],
        Vendedor: "Estrella", 
        FechaVenta: new Date("2022-01-15"),
        FormaEntrega: "Local"
    },
    {
        id:03,
        Venta:[
            {
                Producto:"Pizza Ohana",
                Tamaño: "pequeña", 
                PrecioVenta: 6.90, 
                PrecioCoste:1.50, 
                Unidades:6, 
                Extras:{
                    extra_queso: true, 
                    masa_fina: true, 
                    salsa_texmex: false, 
                    bordes_rellenos: false
                }
        }, 
            {
                Producto: "Refrescos",
                Tamaño: "33cl", 
                PrecioVenta: 2, 
                PrecioCoste: 0.50, 
                Unidades: 6, 
                Extras: {
                        sin_cafeina: false
                    }
        }, 
            {
                Producto: "Fingers de queso",
                Tamaño: "6u",
                PrecioVenta: 3.50,
                PrecioCoste: 1.80,
                Unidades: 2,
                Extras: {
                    salsa: "Salsa Miel&Mostaza"
                }
        },
            {
                Producto: "Helado",
                PrecioVenta: 3.50, 
                PrecioCoste: 1, 
                Unidades: 3
        }
    ], 
        IVA: 0.21,
        Cliente: {
            Nombre:"Estefanía",
            Tlf: "987654321"
        },
        Vendedor: "Steven", 
        FechaVenta: new Date("2022-02-06"), 
        FormaEntrega: "Local"
        },
    {
        id:04,
        Venta:[
            {
                Producto:"Pizza Cremosa",
                Tamaño: "familiar",
                PrecioVenta: 13.90,
                PrecioCoste:5.50,
                Unidades:1,
                Extras:{
                    extra_queso: false,
                    masa_fina: false,
                    salsa_texmex: true,
                    bordes_rellenos: false
                }
        }, 
            {
                Producto:"Pizza Llorona",
                Tamaño: "mediana",
                PrecioVenta: 12.90,
                PrecioCoste:4.50,
                Unidades:1,
                Extras:{
                    extra_queso: true,
                    masa_fina: true,
                    salsa_texmex: false,
                    bordes_rellenos: false
                }
            }
        ],
        IVA: 0.21,
        Cliente:[
                {Nombre:"Laura"},
                {Tlf: "412836442"}
            ],
        Vendedor: "Fernando Huerta",
        FechaVenta: new Date("2022-02-13"),
        FormaEntrega: "Domicilio"

    },
        {
        id:05,
        Venta:[
            {
                Producto:"Pizza CheesyFantasy",
                Tamaño: "familiar", 
                PrecioVenta: 15.90,
                PrecioCoste:7.50, 
                Unidades:4, 
                Extras:{
                    extra_queso: true, 
                    masa_fina: false, 
                    salsa_texmex: false, 
                    bordes_rellenos: true}
            },
                {
                Producto: "Refrescos",
                Tamaño: "33cl", 
                PrecioVenta: 2, 
                PrecioCoste: 0.50,
                Unidades: 6, 
                Extras: {
                        sin_cafeina: true,
                        sin_azucar: true
                    }
            },
                {
                Producto: "Fingers de queso",
                Tamaño: "12u",
                PrecioVenta: 5.50,
                PrecioCoste: 3.80, 
                Unidades: 1, 
                Extras: {
                    salsa: "Salsa Agridulce"
                    }
            },
                {
                Producto: "Alitas de pollo", 
                Tamaño: "4u", 
                PrecioVenta: 3.50,
                PrecioCoste: 1.60,
                Unidades: 1,
                Extras: {
                    salsa: "barbacoa"
                    }
            }
        ], 
        IVA: 0.21, 
        Cliente:[
            {
                Nombre:"Pablo"
            },
            {
                Tlf: "601224532"
            }
        ], 
        Vendedor: "Jose Antonio Fuentes", 
        FechaVenta: new Date("2022-01-29"), 
        FormaEntrega: "Local"
    },


    {
        id:06,
        Venta:[{
            Producto:"Pizza Desierta", 
            Tamaño: "pequeña", 
            PrecioVenta: 4.90,
            PrecioCoste:1.00,
            Unidades:1,
            Extras:{
                extra_queso: false,
                masa_fina: false,
                salsa_texmex: false, 
                bordes_rellenos: false
                }
        },
            {
            Producto: "Agua",
            Tamaño: "50cl", 
            PrecioVenta: 1.50,
            PrecioCoste: 0.20, Unidades: 1
        }
        ],
        IVA: 0.21,
        Cliente:[{
             Nombre:"Victor"}, 
             {
            Tlf: "754210362"
        }], 
        Vendedor: "Carmina Suárez",
        FechaVenta: new Date("2022-02-26")},

    {
        id:07,
        Venta:[{
            Producto:"Pizza Choricera",
            Tamaño: "mediana",
            PrecioVenta: 9.90,
            PrecioCoste:2.50,
            Unidades:2,
            Extras:{
                extra_queso: false,
                masa_fina: false, 
                salsa_texmex: true, 
                bordes_rellenos: true
            }
        }, 
           {
            Producto:"Pizza Salsera",
            Tamaño: "mediana", 
            PrecioVenta: 11.90, 
            PrecioCoste:3.50, 
            Unidades:2, 
            Extras:{
                extra_queso: false, 
                masa_fina: false, 
                salsa_texmex: true, 
                bordes_rellenos: false
            }
        }
    ], 
        IVA: 0.21,
        Cliente:[
            {
                Nombre:"Adriana"
        }, 
            {
                Tlf: "652414783"
        }
    ],
        Vendedor: "Tomás Redondo",
        FechaVenta: new Date("2022-02-28"), 
        FormaEntrega: "Recoger"
    },
        {
        id:08, 
        Venta:[
                {
                Producto:"Pizza Hulka",
                Tamaño: "pequeña",
                PrecioVenta: 7.90,
                PrecioCoste:2.50,
                Unidades:1,
                Extras:{
                    extra_queso: false,
                    masa_fina: true, 
                    salsa_texmex: false, 
                    bordes_rellenos: true
                }
            },
                {
                Producto: "Agua",
                Tamaño: "50cl", 
                PrecioVenta: 1.50,
                PrecioCoste: 0.20,
                Unidades: 1
            }, 
                {
                Producto: "Ensalada",
                PrecioVenta: 4.00, 
                PrecioCoste: 1.80, 
                Unidades: 1
            }, 
                {
                Producto: "Helado",
                PrecioVenta: 3.50, 
                PrecioCoste: 1, 
                Unidades: 1
            }
        ], 
            IVA: 0.21, 
            Cliente:
                    [{
                    Nombre:"Ana"
                },
                    {
                    Tlf: "412531457"
                }
            ], 
            Vendedor: "Jose Antonio Fuentes", 
            FechaVenta: new Date("2022-02-22"), 
            FormaEntrega: "Recoger"
    },
        {
        id:09, 
        Venta:[
            {
                Producto: "Alitas de pollo", 
                Tamaño: "4u", 
                PrecioVenta: 3.50,
                PrecioCoste: 1.60, 
                Unidades: 5, 
                Extras: {salsa: "picante"}
        },
            {
                Producto: "Fingers de queso",
                Tamaño: "6u",
                PrecioVenta: 3.50,
                PrecioCoste: 1.80,
                Unidades: 5, 
                Extras: {
                    salsa: "Salsa SourCream"
        }
    },
            {
                Producto: "Cerveza",
                Tamaño: "33cl",
                PrecioVenta: 0.50,
                PrecioCoste: 2,
                Unidades: 10,
                Extras: {
                        sin_alcohol: false
                }
            }
        ], 
            IVA: 0.21, 
            Cliente:[{
                Nombre:"Alberto"
            },
                {
                Tlf: "652145897"
            }
        ], 
            Vendedor: "Steven", 
            FechaVenta: new Date("2022-01-05"), 
            FormaEntrega: "Local"
        },
    {
        id:10,
        Venta:[{
            Producto:"Pizza Mafiosa",
            Tamaño: "familiar", 
            PrecioVenta: 12.90, 
            PrecioCoste:4.50, 
            Unidades:1, 
            Extras:{
                extra_queso: true,
                masa_fina: true,
                salsa_texmex: true,
                bordes_rellenos: true
        }
    }, 
        {
            Producto:"Pizza Chingona",
            Tamaño: "familiar", 
            PrecioVenta: 15.90, 
            PrecioCoste:7.50, 
            Unidades:1, 
            Extras:{
                extra_queso: true, 
                masa_fina: true, 
                salsa_texmex: true, 
                bordes_rellenos: true
            }
        },
            {
            Producto: "Refrescos",
            Tamaño: "33cl",
            PrecioVenta: 2,
            PrecioCoste: 0.50, 
            Unidades: 4, 
            Extras: {
                sin_azucar: true, 
                sin_cafeina: false
                }
        }, 
            {
            Producto: "Helado",
            PrecioVenta: 3.50,
            PrecioCoste: 1,
            Unidades: 4
        }
    ], 
        IVA: 0.21,
        Cliente:[{
                Nombre:"Elisa"
        },
            {
                 Tlf: "854123455"
        }
    ], 
        Vendedor: "Estrella",
        FechaVenta: new Date("2022-03-01")
    },

])