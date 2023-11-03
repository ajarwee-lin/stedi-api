const fetch = require( "node-fetch2" ) ;

it( "Should match my name", async () => { 
      const response = await fetch("http://localhost:3000/jarwee");
      const myName = await response.text();
      expect(myName).toBe("Hello Jarwee");
});
