exports.handleResponse = function(req, res){
	console.log(req.error)
	if(req.error) return res.status(500).send(req.error.sqlMessage?req.error.sqlMessage:'Error on the server.');
	if(!req.data) return res.status(404).send('Api not found.');
	res.status(200).json({data : req.data});
}