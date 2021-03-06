'use strict';

const ClassData = require('./class_data'),
    FieldData = require('./field_data'),
    TypeData = require('./type_data'),
    InterfaceData = require('./interface_data'),
    EnumData = require('./enum_data'),
    AssociationData = require('./association_data'),
    OperationData = require('./operation_data'),
    ValidationData = require('./validation_data');

/**
 * The parsed data class holds the various information taken from the UML file.
 */
class ParsedData {
  constructor() {
    this.classes = {};
    this.classNames = [];
    this.fields = {};
    this.operations = {};
    this.associations = {};
    this.types = {};
    this.enums = {};
    this.interfaces = {};
    this.interfaceNames = [];
    this.validations = {};
    this.userClassId = null;
  }

  /**
   * Adds a new class.
   * @param id its id.
   * @param data the class data.
   */
  addClass(id, data) {
    this.classes[id] = new ClassData(data);
    this.classNames.push(data.name);
  }

  /**
   * Adds a new interface.
   * @param id its id.
   * @param data the interface data.
   */
  addInterface(id, data) {
    this.interfaces[id] = new InterfaceData(data);
    this.interfaceNames.push(data.name);
  }

  /**
   * Adds a new field.
   * @param classId the class' id.
   * @param fieldId its id.
   * @param data the field data.
   */
  addFieldInterface(interfaceId, fieldId, data) {
    this.fields[fieldId] = new FieldData(data);
    this.interfaces[interfaceId].addField(fieldId);
  }

  /**
   * Adds a new field.
   * @param classId the class' id.
   * @param fieldId its id.
   * @param data the field data.
   */
  addField(classId, fieldId, data) {
    this.fields[fieldId] = new FieldData(data);
    this.classes[classId].addField(fieldId);
  }

  /**
   * Adds a new field.
   * @param classId the class' id.
   * @param fieldId its id.
   * @param data the field data.
   */
  addOperation(classId, operationId, data) {
    console.log("NEW DATA", data)
    this.operations[operationId] = new OperationData(data);
    console.log("NEW DATA2", this.operations[operationId])
    console.log("NEW DATA3" ,new OperationData(data))
    this.classes[classId].addOperation(operationId);
  }

  addOperationInterface(interfaceId, operationId, data) {
    this.operations[operationId] = new OperationData(data);
    this.interfaces[interfaceId].addOperation(operationId);
  }

  /**
   * Adds a validation to a field.
   * @param fieldId the field's id.
   * @param validationId the validation's id.
   * @param data the validation data.
   */
  addValidationToField(fieldId, validationId, data) {
    this.validations[validationId] = new ValidationData(data);
    this.fields[fieldId].addValidation(validationId);
  }

  /**
   * Gets a validation.
   * @param validationId he validation's id.
   * @returns {Object} the validation data.
   */
  getValidation(validationId) {
    return this.validations[validationId];
  }

  /**
   * Adds a new association.
   * @param id its id.
   * @param data the association data.
   */
  addAssociation(id, data) {
    this.associations[id] = new AssociationData(data);
  }

  /**
   * Adds a new type.
   * @param id its id.
   * @param data the type data.
   */
  addType(id, data) {
    this.types[id] = new TypeData(data);
  }

  /**
   * Adds a new enum.
   * @param id its id.
   * @param data the enum data.
   */
  addEnum(id, data) {
    this.enums[id] = new EnumData(data);
  }

  /**
   * Gets a type by its id.
   * @param id the id.
   * @returns {TypeData} the type.
   */
  getType(id) {
    return this.types[id];
  }

  /**
   * Gets a class by its id.
   * @param id the id.
   * @returns {ClassData} the class.
   */
  getClass(id) {
    return this.classes[id];
  }

  /**
   * Gets a interface by its id.
   * @param id the id.
   * @returns {InterfaceData} the interface.
   */
  getInterface(id) {
    return this.interfaces[id];
  }

  /**
   * Gets a field by its id.
   * @param id the id.
   * @returns {FieldData} the field.
   */
  getField(id) {
    return this.fields[id];
  }

  /**
   * Gets an association by its id.
   * @param id the id.
   * @return {AssociationData} the association.
   */
  getAssociation(id) {
    return this.associations[id];
  }

  /**
   * Gets an enum by its id.
   * @param id the id.
   * @returns {EnumData} the enumeration.
   */
  getEnum(id) {
    return this.enums[id];
  }
}

module.exports = ParsedData;
