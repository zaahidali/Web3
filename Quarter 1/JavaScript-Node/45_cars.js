clear();

Cars("Tesla", "ModelX", color="Red")

function Cars(manufacturer,  modelName, ...args) {
	console.log({Manfactuer: manufacturer, Model: modelName, color: args[0]})
}