const addCustomer = (id, name, phone) => {
    if (typeof id != Number)
        throw new Error("type of id can be only number");
    return { "id": id, "name": name, "phone": phone }
}
module.exports = addCustomer;

