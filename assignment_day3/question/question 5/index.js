const obj = {
    b: 10,
    c: {
        d: {
            e: 20
        }           
    }
}

function objCopy(obj) {
  
    if (null === obj || 'object' !== typeof obj) return obj;
      
    switch (obj.constructor) {
      case Boolean:
        return new Boolean(obj);
      case Number:
        return new Number(obj);
      case String:
        return new String(obj);
      case Date:
        return new Date().setTime(obj.getTime());
      case Array:
        return obj.map((o) => objCopy(o));
      case RegExp:
        return new RegExp(obj);
      case BigInt:
        return BigInt(obj);
      case Object: {
        let copy = {};
        Object.keys(obj).forEach((key) => {
          if (obj.hasOwnProperty(key)) copy[key] = objCopy(obj[key]);
        });
        return copy;
      }
    }
    return obj;
  }

  const obj1=objCopy(obj);

obj.c.d.e = 30;
console.log(obj.c.d.e); // should print 30
console.log(obj1.c.d.e); // should print 20

