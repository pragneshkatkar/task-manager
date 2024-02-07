export default function Test(){


    function output(inputArray){
        let characters = []
        let outputArray = []
        let outputString = ""

        inputArray.map((item, key) => {
            if(!characters.includes(item)){
                characters.push(item)
            }
        })
        
        characters.map((item) => {
            outputString += item
            let numberOfChars = 0
            inputArray.map((charItem) => {
                if(item == charItem){
                    numberOfChars++
                }
            })
            if(numberOfChars > 1){
                outputString += numberOfChars
            }
        })

        console.log(outputString)
    }

    const chars = ["a", "a", "b", "b", "b"]
    output(chars)


    return (
        <h1>Test</h1>
    )
}