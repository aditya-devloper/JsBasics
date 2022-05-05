const instructor = {
    aptitude : 0,
    coreskill : 0,
    evaluate:function(){
        console.log(this.aptitude+this.coreskill);
    }
}



let interns = [
    {
        aptitude: 100,
        coreskill: 100
    },
    {
        aptitude: 200,
        coreskill: 200
    },
    {
        aptitude: 300,
        coreskill: 300
    },
    {
        aptitude: 400,
        coreskill: 400
    },
    {
        aptitude: 500,
        coreskill: 500
    },
    {
        aptitude: 600,
        coreskill: 600
    },
    {
        aptitude: 700,
        coreskill: 700
    },
]


for(let i=0;i<interns.length;i++)
{
    instructor.aptitude=interns[i].aptitude;
    instructor.coreskill=interns[i].coreskill;
    var fun=instructor.evaluate.bind(interns[i]);
    fun();
}