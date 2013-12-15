/**
 * Created with IntelliJ IDEA.
 * User: yivanov
 * Date: 9/29/13
 * Time: 11:44 PM
 * To change this template use File | Settings | File Templates.
 */
describe('PhoneCat controllers', function() {

    describe('PhoneListCtrl', function(){

        it('should create "phones" model with 3 phones', function() {
            var scope = {},
                ctrl = new PhoneListCtrl(scope);

            expect(scope.phones.length).toBe(3);
        });
    });
});