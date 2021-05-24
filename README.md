# is-real

Is this real?

You can easily figure out which string is a real number with is-real.

- [Download](#Download)
- [Usage](#Usage)
- [Dependencies](#Dependencies)
- [License](#License)
- [Contact](#Contact)

## Download

```bash
$ npm install is-real
```

## Usage

```js
const is_real = require("is_real");

console.log(is_real(123)); // true
console.log(is_real(+123.12)); // true
console.log(is_real(-123.0)); // true
console.log(is_real("123")); // true
console.log(is_real("abc")); // false
```

## Dependencies

- Nothing

If there's no problem using javascript and npm, it will work well.

## License

- MIT License

You can use it the way you want.

## Contact

### QuqqU

- [Github](https://github.com/QuqqU)
- [npm](https://www.npmjs.com/package/is-real)
