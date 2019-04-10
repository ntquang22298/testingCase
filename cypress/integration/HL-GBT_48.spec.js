
describe('Kiểm tra nhập số lần làm bài quá 2 chữ số', function () {

    context('Đăng nhập', function () {
      beforeEach(function () {
        cy.visit('https://hoclieu.sachmem.vn');
      })
  
      it('Đăng nhập với tư cách là giáo viên', function () {
        cy.contains('Đăng nhập').click();
        cy.get('#user_email').type('ntquang22298@gmail.com'); // type email
        cy.get('#user_password').type('tanhoi98'); // type password
        cy.get('#new_user > div:nth-child(6) > input').click();
  
        cy.url().should('include', 'https://hoclieu.sachmem.vn');
        cy.wait(2000);
        // Chọn 1 lớp bất kì
        cy.contains('Lớp 1').click();
        // Chọn 1 bài tập bất kì
        cy.contains('Bài tập cuối tuần Toán 1 Tập 2').click();
        cy.wait(2000);
        // Ấn nút giao bài tập
        cy.get('.pull-right > .btn').click();
        // Xóa bỏ phần text mặc định trong ô mô tả
        cy.get(':nth-child(2) > .form-control').clear();
        // Điền mô tả
        cy.get(':nth-child(2) > .form-control').type('test số lần làm lại');
        // Chọn 1 lớp bất kì
        cy.get(':nth-child(3) > .ng-select > .ng-select-container > .ng-arrow-wrapper').click();
        cy.get('.ng-option-label').click();
        // ghi số lần làm bài quá 2 chữ số
        cy.get(':nth-child(7) > .form-control').type('696');

        
        // Ấn nút tạo
        cy.get('form.ng-valid > .modal-footer > .btn-primary').click();
        cy.contains('Số lần làm lại phải nhỏ hơn 99').should('exist');
        // cy.get('#userDropdown > span').should('contain', '(ntquang22298@gmail.com)'); // type user_name
      })
    })
  })
  