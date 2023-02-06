function tallestFriend ( height ) {
    //Write your code here
    //Don't forget to return
      let tallest = height[0];
      for (let i = 0; i < height.length; i++) {
        let number = height[i];
        if (tallest < number) {
          tallest = number;
        }
      }
      return tallest;
    }