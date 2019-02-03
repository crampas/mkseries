const { format4, extension, transformFilename } = require('./filename-utils');
const  expect = require('chai').expect;


describe('format4', function() {
    it('should format 1 digit number', function() {
        expect(format4(2)).to.equal('0002');
    });
    it('should format 2 digit number', function() {
        expect(format4(42)).to.equal('0042');
    });
    it('should format 3 digit number', function() {
        expect(format4(942)).to.equal('0942');
    });
    it('should format 4 digit number', function() {
        expect(format4(1942)).to.equal('1942');
    });
});

describe('extension', function() {
    it('should extract simple extension', function() {
        expect(extension('file.ext')).to.equal('.ext');
    });
    it('should extract extension from multiple dotted file', function() {
        expect(extension('prefix.othre.file.ext')).to.equal('.ext');
    });
});

describe('transformFilename', function() {
    it('should transform simple file', function() {
        expect(transformFilename('file.ext', 'sz1', 13)).to.equal('sz1.0013.ext');
    });
    it('should transform file with path', function() {
        expect(transformFilename('path/to/file/file.ext', 'sz1', 13)).to.equal('path/to/file/sz1.0013.ext');
    });
});

