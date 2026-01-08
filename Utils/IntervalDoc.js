// depend on https://raw.githubusercontent.com/ilNubis/IlNubis-Js-scripts/refs/heads/main/Utils/AssertLib.js


// -- Dev docs --
// This set of function allow to grab some HTMLElements with async interval
// 
class IntervalDoc {

    static _opzPreset = {
        intervalMs: 100,
        maxIntervalCycles: 100
    };

    static mergeOpz(dest, src) {
        AssertLib.assertTypeArgs([
            "IntervalDoc.mergeOpz()",
            ["dest", dest, ["object", "undefined"]],
            ["src", src, "object"]
        ]);

        if (undefined === dest) {
            dest = {}
        }

        if (undefined === dest.intervalMS) {
            dest.intervalMS = src.intervalMS;
        }

        if (undefined === dest.maxIntervalCycles) {
            dest.maxIntervalCycles = src.maxIntervalCycles;
        }

        return dest;
    }

    static getElementByid (elemId, func, opz) {
        AssertLib.assertTypeArgs([
            "IntervalDoc.getElementByid()",
            ["elemId", elemId, "string"],
            ["func", func, "function"],
            ["opz", opz, ["object", "undefined"]]
        ]);

        opz = IntervalDoc.mergeOpz(opz, IntervalDoc._opzPreset);

        var elem = undefined;

        var intervalCycles = 0;
        const intervalId = setInterval(() => {    
            if (intervalCycles >= opz.intervalMs) {
                clearInterval(intervalId);
            }
            elem = document.getElementById(elemId)
            
            if (elem) {
                clearInterval(intervalId);
                func(elem);
            }
            intervalCycles++;
        }, opz.intervalMs);

        return intervalId;
    }

    static getElementsByClassName(elemClassName, func, opz) {
        AssertLib.assertTypeArgs([
            "IntervalDoc.getElementsByClassName()",
            ["elemClassName", elemClassName, "string"],
            ["func", func, "function"],
            ["opz", opz, ["object", "undefined"]]
        ]);

        opz = IntervalDoc.mergeOpz(opz, IntervalDoc._opzPreset);

        var elems = undefined;

        var intervalCycles = 0;
        const intervalId = setInterval(() => {    
            if (intervalCycles >= opz.intervalMs) {
                clearInterval(intervalId);
            }
            elems = document.getElementsByClassName(elemClassName);
            
            if (elems.length > 0) {
                clearInterval(intervalId);
                func(elems)
            }
            intervalCycles++;
        }, opz.intervalMs);

        return intervalId;
    }


    static getElementsByTagName(elemTagName, func, opz) {
        AssertLib.assertTypeArgs([
            "IntervalDoc.getElementsByTagName()",
            ["elemTagName", elemTagName, "string"],
            ["func", func, "function"],
            ["opz", opz, ["object", "undefined"]]
        ]);

        opz = IntervalDoc.mergeOpz(opz, IntervalDoc._opzPreset);

        var elems = undefined;

        var intervalCycles = 0;
        const intervalId = setInterval(() => {    
            if (intervalCycles >= opz.intervalMs) {
                clearInterval(intervalId);
            }
            elems = document.getElementsByTagName(elemTagName);
            
            if (elems.length > 0) {
                clearInterval(intervalId);
                func(elems)
            }
            intervalCycles++;
        }, opz.intervalMs);

        return intervalId;
    }

    // TODO: Other getElements

}