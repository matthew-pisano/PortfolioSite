import https from 'https';
import { createServer } from 'http';
import _fs from 'fs';
const { promises: { readFile } } = _fs;
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
console.log("Server.js is running...");
app.use(express.static('./client/build'));
app.set('trust proxy', true);
app.get('/', function(req, res){
	res.sendFile(path.resolve('./client/build', 'index.html'));
    //res.redirect("/home");
});
/*app.get('/home', async function(req, res){
    res.write(await splice("home"));
	res.end();
});
app.get('/simplex', async function(req, res){
	res.write(await splice("simplex"));
	res.end();
});*/
/*app.get('/custom', async function(req, res){
	res.write(await splice("custom", req.query.custom));
	res.end();
})*/
//Error handling
app.use((req, res, next) => {
    res.send("404 :(");
});

// error handler middleware
/*app.use((error, req, res, next) => {
	try{
		res.status(error.status || 500).send({
			error: {
				status: error.status || 500,
				message: error.message || 'Internal Server Error',
			},
		});
	}catch(error){
	}
});*/
//Security credentials
let options = {};
/*let options = {
    ca: [fs.readFileSync('cert/ca_bundle.crt')],
    cert: fs.readFileSync('cert/certificate.crt'),
    key: fs.readFileSync('cert/private.key')
};*/
//Launch server using credentials
let server = createServer(options, app);
server.listen(port, function(){
    console.log("server running");
});

async function splice(stub, customText){
	let text = stub === "custom" ? customText : await readFile('./public/'+stub+'.html', 'utf-8');
	let spliced = (await readFile('./public/wrapper.html', 'utf-8')).replace("<!--CONTENT-->", text);
	/*spliced = spliced.replace("let pageInfo = {};", "let pageInfo = " + JSON.stringify({
		"length": spliced.length,
		"lang": "HTML",
		"encoding": "UTF-8"
	}) + ";")*/
	spliced = spliced.replace("<!--PAGE_LENGTH-->", (spliced.match(new RegExp("\n", "g")) || []).length).replace("<!--PAGE_ENC-->", "UTF-8").replace("<!--PAGE_LANG-->", "HTML");
	return spliced;
}