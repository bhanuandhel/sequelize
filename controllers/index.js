const {addUser,findUser, updateUser, deleteUser} = require('./userController');
const {finderOpration} = require('./finderController');
const {setterGetter} = require('./setterGetterController');
const {validations} = require('./validationController');
const {RawQury} = require('./rawQueryController');
const {OneToOne, belongsTo, OneToMany, manyToMany} = require('./oneToOneController');
const {scopes} = require('./scopesController');
const {oneToManyPolymorphic} = require('./polymorphicController');

module.exports ={
    addUser,
    findUser,
    updateUser,
    deleteUser,
    finderOpration,
    setterGetter,
    validations,
    RawQury,
    OneToOne,
    belongsTo,
    OneToMany,
    manyToMany,
    scopes,
    oneToManyPolymorphic
}