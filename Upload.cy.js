describe('Upload File in website', () => {
    
    it('Uploads File', () => {
     
      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
  
      
      const fileName = ['Burp.png','iron.jpg','resume.pdf']; //file is in fixtures
  
      
      cy.get('input[name="filesToUpload"]').attachFile(fileName);
  
      
      cy.get('#fileList').should('contain', 'Burp.png'); //check file is uploaded
    });

    it('multiple file uploads',()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get("#filesToUpload").attachFile(['Burp.png','iron.jpg','resume.pdf']);

        cy.get('#fileList').should('contain', 'Burp.png');//Multiple uploads
        cy.get('#fileList').should('contain', 'iron.jpg');
        cy.get('#fileList').should('contain', 'resume.pdf');


    })
  });
  