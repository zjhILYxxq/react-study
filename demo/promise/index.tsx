class MyPromise {

    _value = undefined;
    _status = 'pending';
    handlers = [];

    constructor(func) {
        func((value) => resolve.call(this, value), error => rejected.call(this, error));
    }

    then = (onFullfilled, onRejected) => {

    }

    catch = (onRejected) => {

    }

    finally = (callback) => {

    }

    static resolve = (value) => {

    }

    static reject = (error) => {

    }

    static all = (list) => {

    }

    static race = (list) => {

    }

    static any = (list) => {

    }

    static allSetted = (list) => {

    }
}

function resolve(value) {
    this._value = value;
    this._status = 'resolved';
    this.handlers.forEach(handle => handler.call(this, handle));
}

function rejected(error) {
    this._value = error;
    this._status = error;
    this.handlers.forEach(handle => handler.call(this, handle));
}

function handler(handle) {
    if (this._status === 'pending') {
        this.handlers.push(handle);
        return;
    }
    queueTask(() => {
        if (this._status === 'resolved') {
            handle.onFullfilled(this._value);
        } else {
            handle.onRejected(this._value);
        }
    });
}

let taskQueue = [];
let flush = false;

function queueTask(task) {
    if (!flush) {
        flush = true;
        setTimeout(flushQueue, 0);
    }
    taskQueue.push(task);
}

function flushQueue() {
    while(taskQueue.length) {
        taskQueue.shift()();
    }
    flush = false;
}