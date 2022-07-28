
const FishArray: string[] = ['Nemo'];

function FindNemo(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    if (FishArray[i] == "Nemo")
      console.log("Found Nemo");
  }
}

FindNemo(FishArray);