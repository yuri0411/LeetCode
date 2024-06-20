type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    private subscriber: Array<{eventName: string, callback: Callback}>
    constructor() {
        this.subscriber = []
    }

    subscribe(eventName: string, callback: Callback): Subscription {
        this.subscriber.push({eventName, callback})
        return {
            unsubscribe: () => {
                const index = this.subscriber.findIndex((subscribe) => subscribe.callback === callback)
                this.subscriber.splice(index, 1)
            }
        };
    }

    emit(eventName: string, args: any[] = []): any[] {
        const results = this.subscriber.filter((subscribe) => subscribe.eventName === eventName).map((subscribe) => {
            return subscribe.callback(...args)
        } )

        return results
    }
}


/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */