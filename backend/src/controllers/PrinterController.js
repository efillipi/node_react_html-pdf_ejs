
const pdf = require('html-pdf')
const ejs = require('ejs');

module.exports = {
    async index (request){
        const { name,email,whatsapp,city,uf} = request.body;

        console.log({ name,email,whatsapp,city,uf})
        
        var vname = [name];
        var vemail = [email];
        var vwhatsapp = [whatsapp];
        var vcity = [city];
        var vuf = [uf];

        console.log(vname )
        console.log(vemail )
        console.log(vwhatsapp )
        console.log(vcity )
        console.log(vuf )

       
        ejs.renderFile("./meuarquivo.ejs", {
            pnome:vname, 
            pemail: vemail, 
            pwhatsapp:vwhatsapp, 
            pcity:vcity,
            puf:vuf

        },(err, html) =>{

            try {
                pdf.create(
                    html
                    ,{}).toFile('./pdf/meupdf.pdf',
                (err,res) => {
                    try {
                        console.log(res)
                    } catch (error) {
                        console.log(err)
                    }
                })
            } catch (error) {
                console.log(err)
            }
        });
    },
};




