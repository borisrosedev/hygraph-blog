function* generator(lifeCycleHooksMessages:Array<string>) {
    for(const message in lifeCycleHooksMessages){
        yield console.log(message);
    }
}
  