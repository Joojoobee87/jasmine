describe("Calculator", function(){
    
    beforeEach(function() {
        calc= new Calculator;
    });
    
    var calc = new Calculator;
    
    describe("Addition tests", function(){
        it("Should return 42", function(){
            calc.add(22);
            calc.add(20);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function(){
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        })
        it("should return an error if we don't supply two numbers", function() {
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});

whatCanIDrink() {
    
}