// global variables and constants

const NumberColors: number = 6;
const NumberItems: number = 4;
const MAX_TRY: number = 3; //10
let theColorSet: ColorSet;

// classes

/// Set of colors
class ColorSet{
    color: number[] = [];
    constructor(arr? : number[]){
        let isArr = typeof arr !== "undefined";

        for(let i=0; i<NumberItems; i++ ){
            if (isArr && i<arr.length){
                this.color.push(arr[i]);
            }else{
                this.color.push(0);
            }
        }
    };
    colors(){
        return this.color;
    };
    static ThinkOf(): ColorSet{
        let arr: number[] =[];
        for (let i=1; i<=NumberItems; i++){
            arr.push(RandomInt(1,NumberColors));
        }
        return new ColorSet(arr);
    };
    /// Количество угаданных цветов
    Coincidences(cs:ColorSet): number{
        let result: number = 0;
        if (this.colors().length != cs.colors().length) return -1 // TODO: Бросить исключение
        for (var i=0; i < this.colors().length; i++){
            if (this.color[i]==cs.colors()[i]) result++;
        }
        return result;
    }
}

// functions

/// Ramdom int >=min & <=max
let RandomInt = (min:number, max:number) => Math.floor(Math.random()*(max - min +1) + min);

theColorSet = ColorSet.ThinkOf();
console.log("theColorSet=", theColorSet);
