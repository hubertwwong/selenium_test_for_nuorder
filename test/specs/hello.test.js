const expect = require('chai').expect

describe("Home Page", () => {
  describe("> Page Object tests", () => {
    let page;

    before(() => {
      page = {};
      browser.url("/");
      page.url = browser.getUrl();
      page.title = browser.getTitle();
    });

    describe("> Misc", () => {
      it("> url", () => {
        expect(page.url).to.equal("http://192.168.33.10:3000/");
      });

      it("> page title", () => {
        expect(page.title).to.equal("Compare Numbers Form");
      });
    });

    describe("> Jumbotron", () => {
      let jumbotron;

      before(() => {
        jumbotron = browser.element("div.jumbotron")
      });

      it("> title", () => {
        const expectedText = "Compare Numbers Form";
        let title = jumbotron.getText("h2");
        expect(title).to.equal(expectedText);
      });

      it("> sub header", () => {
        const expectedText = "This form compares the first two numbers against the third to let the user know whether the third is between the first two";
        let subHeader = jumbotron.getText("p");
        expect(subHeader).to.equal(expectedText);
      });
    });

    describe("> Form", () => {
      let form;

      before(() => {
        form = browser.element("form[name='compare']");
        // click on error to display the error messages
        form.click("input[type='submit']");
      });

      describe("> 1st question field", () => {
        let div

        before(() => {
          div = form.element("div.form-group:nth-child(1)");
        });

        it("> title", () => {
          const expectedText = "First number";
          let title = div.getText("label");
          expect(title).to.equals(expectedText);
        });

        it("> error", () => {
          const expectedText = "First number cannot be empty";
          let errorMsg = div.getText("div.alert");
          expect(errorMsg).to.equals(expectedText);
        });
      });

      // some weirdness where it wont pick the 2nd child.
      describe("> 2nd question field", () => {
        let div;

        before(() => {
          div = form.element("div.form-group:nth-child(2)");
        });

        it("> title", () => {
          const expectedText = "Second number";
          let title = div.getText("label");
          expect(title).to.equals(expectedText);
        });

        it("> error", () => {
          const expectedText = "Second number cannot be empty";
          let errorMsg = div.getText("div.alert");
          expect(errorMsg).to.equals(expectedText);
        });
      });

      describe("> 3rd question field", () => {
        let div
        before(() => {
          div = form.element("div.form-group:nth-child(3)");
        });

        it("> title", () => {
          const expectedText = "Number to compare";
          let title = div.getText("label");
          expect(title).to.equals(expectedText);
        });

        it("> error", () => {
          const expectedText = "Number to compare cannot be empty";
          let errorMsg = div.getText("div.alert");
          expect(errorMsg).to.equals(expectedText);
        });
      });

      describe("> compare button", () => {
        let label;

        before(() => {
          console.log(">>>>", form);
          label = form.getAttribute("input[type='submit']", "data-test");
        });

        it("> button text", () => {
          const expectedText = "compare";
          expect(label).to.equals(expectedText);
        });
      });
    });
  });

  describe("> Functionality tests", () => {
    // using beforeEach here to reset the page because you are modifying things.
    beforeEach(() => {
      browser.url("/");
    });

    describe("> Positive cases", () => {
      describe("> Number between first and second", () => {
        let form;
        let dialog;
        let title;
        let msg;
        let label;

        const firstNum=3;
        const secondNum=5;
        const compareNum=4;

        before(() => {
          form = browser.element("form[name='compare']");
          form.setValue("input[name='numFirst']", firstNum);
          form.setValue("input[name='numSecond']", secondNum);
          form.setValue("input[name='numToCompare']", compareNum);
          form.click("input[type='submit']");
        });

        describe("> Success Dialog", () => {
          before(() => {
            dialog = browser.element("div.modal-dialog");
            title = dialog.getText("div.modal-header");
            msg = dialog.getText("div.modal-body");
            label = dialog.getText("div.modal-footer");
          });

          it("> modal dialog", () => {
            expect(dialog).to.not.be.null;
          });

          it("> title", () => {
            const expectedText = "Result of comparison";
            expect(title).to.equals(expectedText);
          });

          it("> msg", () => {
            const expectedText = compareNum + " is between " + firstNum + " and " + secondNum;
            expect(msg).to.equals(expectedText);
          });

          it("> label", () => {
            const expectedText = "Close";
            expect(label).to.equals(expectedText);
          });
        });
      });
    });

    describe("> Negative cases", () => {
      describe("> Number not between first and second", () => {
        let form;
        let dialog;
        let title;
        let msg;
        let label;

        const firstNum=4;
        const secondNum=5;
        const compareNum=6;
  
        before(() => {
          form = browser.element("form[name='compare']");
          console.log(">>>> log", form);
          form.setValue("input[name='numFirst']", firstNum);
          form.setValue("input[name='numSecond']", secondNum);
          form.setValue("input[name='numToCompare']", compareNum);
          form.click("input[type='submit']");
        });

        describe("> Failure Dialog", () => {
          before(() => {
            dialog = browser.element("div.modal-dialog");
            title = dialog.getText("div.modal-header");
            msg = dialog.getText("div.modal-body");
            label = dialog.getText("div.modal-footer");
          });

          it("> modal dialog", () => {
            expect(dialog).to.not.be.null;
          });
  
          it("> title", () => {
            const expectedText = "Result of comparison";
            expect(title).to.equals(expectedText);
          });
  
          it("> msg", () => {
            const expectedText = compareNum + " is not between " + firstNum + " and " + secondNum;
            expect(msg).to.equals(expectedText);
          });
  
          it("> label", () => {
            const expectedText = "Close";
            expect(label).to.equals(expectedText);
          });
        });
      });
    });
  });
});