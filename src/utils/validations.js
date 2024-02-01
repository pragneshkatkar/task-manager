export const validations = {
    //basic
    mobile: /^[0-9]{10}$/,
    landline: /^[0-9]{11}$/,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    text: /^[a-zA-Z ]+$/,
    text_number: /^[a-zA-Z0-9 ]+$/,
    number: /^[0-9 ]+$/,
    url: new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"),
}