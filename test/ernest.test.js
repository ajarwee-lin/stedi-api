const response = await fetch('http://localhost:3000/ernest');
      const name = await response.text();
      expect(name).toBe('ernest');
