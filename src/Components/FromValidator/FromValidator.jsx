
export default function FromValidator(event) {
    let { name, value } = event.target
    switch (name) {
        case "name":
            if (value.length === 0)
                return +" Field is Mendatory"
            else if (value.length < 1 || value > 30)
                return  name  + "Length Must Be 3-50 Characters"
            else
                return ""

        default:
            return ""
    }
}