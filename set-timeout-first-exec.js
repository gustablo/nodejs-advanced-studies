setTimeout(() => {
    console.log('timeouted');
}, 0);

setImmediate(() => {
    console.log('immediated');
});

console.log('executed');