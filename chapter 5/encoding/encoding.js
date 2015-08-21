describe("alphabet buffer", function(){
    var alphaBetuffer;

    beforeEach(function(){
        alphaBetuffer = new Buffer("abcdefghijklmnopqrstuvwxyz");
    });

    it("should have first octet as ASCII code 97 ('a')", function(){
        expect(alphaBetuffer[0]).toEqual('a'.charCodeAt(0));
    });

    it("requires explicit character codes", function(){
        var betaBetuffer = new Buffer(26);
        alphaBetuffer.copy(betaBetuffer);

        betaBetuffer[2] = 'c';
        expect(betaBetuffer.toString()).not.toEqual(alphaBetuffer.toString());

        betaBetuffer[2] = 'c'.charCodeAt(0);
        expect(betaBetuffer.toString()).toEqual(alphaBetuffer.toString());
    });

    it("is not a copy of itself", function () {
        var betaBetuffer = new Buffer(26);
        alphaBetuffer.copy(betaBetuffer);

        expect(alphaBetuffer).not.toEqual(betaBetuffer);
    });

    it("is a slice of itself", function(){
        var betaBetuffer = alphaBetuffer.slice();

        expect(alphaBetuffer).toEqual(betaBetuffer);
    });

    it("can be reversed", function () {
        var reverseSlicingArray = new Array(26);
        for(var arrayPos = 0; arrayPos < 26; arrayPos++){
            reverseSlicingArray[25 - arrayPos] = alphaBetuffer.slice(arrayPos, arrayPos + 1);
        }

        var reverseAlphaBetuffer = Buffer.concat(reverseSlicingArray);
        expect(reverseAlphaBetuffer[25]).toEqual(alphaBetuffer[0]);
        expect(reverseAlphaBetuffer.toString()).toEqual('zyxwvutsrqponmlkjihgfedcba');
    })
});