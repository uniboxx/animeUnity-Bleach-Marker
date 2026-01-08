

class AssertLib {

    // --- Reference Docs ---
    // https://stackoverflow.com/questions/15313418/what-is-assert-in-javascript
    static assert(condition, message) {
        if (typeof message == "string") {
            message = Error(message);
        }
        if (!condition) {
            throw message || "Assertion failed";
        }
    }

    static assertTypeArgs(argsData) {
        // argsData = [srcName, [argName, argValue, acceptedTypes], ...]
        //    scrName(optional): the name of the source that need this assert.
        //       [It is recommended to have to improve the error indications]
        //    argName: the name of the argument
        //    argValue: the value of the argument
        //    acceptedTypes: can be a single string or an array of string
        // example: 
        //   var something = (foo, bar, fuzz) => {
        //     assertTypeArgs([
        //       "something",
        //       ["foo", foo, "object"], 
        //       ["bar", bar, ["string", undefined]],
        //       ["fuzz", fuzz, ["string", "number"]] 
        //     ]);
        //   }

        function isString(src) {
            return (typeof src === "string") || (src instanceof String);
        }

        function isArray(src) {
            return src instanceof Array;
        }
        
        if (!(argsData instanceof Array)) {
            throw Error("assertTypeArgs(): expected argsData as an Array but found something else.");
        }
        var srcName = "UNKNOWN_SOURCE";
        var firstItem = argsData[0];
        
        var boolFirstItemString = isString(firstItem)
        
        if (!(boolFirstItemString || isArray(firstItem))) {
            throw Error(`assertTypeArgs(<rgsData>): expected argsData[0] to be a 'string' or Array but found something else.`);
        }
        
        if (boolFirstItemString){
            srcName = firstItem;
            argsData = argsData.slice(1, argsData.length);
        }
        
        argsData.forEach((item, index) => {
            // Check every item instance
            if (!isArray(item)) { 
                throw Error(`assertTypeArgs(<rgsData.forEach>): expected argsData[${index + 1}] to be an Array but found something else.`);
            }
            
            if (item.length != 3) {
                throw Error(`assertTypeArgs(<rgsData.forEach>): expected argsData[${index + 1}].length to be 3 but found ${item.length}.`);
            }
            
            var argName = item[0];
            if (!isString(argName)) {
                throw Error(`assertTypeArgs(<rgsData.forEach>): expected argsData[${index + 1}][0] to be a 'string' but found something else.`)
            }
            
            var argValueType = typeof item[1];
            if (item[1] instanceof String) {
                var argValueType = "string";
            }
            
            var acceptedTypes = item[2];
            var boolAcceptedTypesString = isString(acceptedTypes);
            var boolAcceptedTypesArray = isArray(acceptedTypes);
            
            if (!(boolAcceptedTypesString || boolAcceptedTypesArray)) {
                throw Error(`assertTypeArgs(<rgsData.forEach>): expected argsData[${index + 1}][2] to be a 'string' or Array but found something else.`);
            }
            
            if (boolAcceptedTypesString) {
                if (argValueType != acceptedTypes) {
                    throw Error(`${srcName}: expected ${argValueType} to be ${acceptedTypes} but found ${argValueType}`);
                }
            } else if (boolAcceptedTypesArray) {
                if (!acceptedTypes.includes(argValueType)) {
                    throw Error(`${srcName}: expected ${argValueType} to be in this list [${acceptedTypes.join(", ")}] of types but found ${argValueType}`);
                }
            }
            
        });
    }
}