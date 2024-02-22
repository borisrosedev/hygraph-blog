export default function* generator(lifeCycleHooksMessages:Array<string>) {
    for(const message of lifeCycleHooksMessages){
        yield console.log(message);
    }
}
  