1. Create a ReUsable SelectComponent that will replace the HTML select element 
2. Make sure that the SelectComponent is a standalone component

3. Write custom validators for following checks on UI element
  - ProductName must starts from Upper Case Character
  - (Mandatory) ProductId must not be repeated
  - (Optional)If Price against the selected Catrgory must be as follows
    - Electronics > 2000
    - Electrical > 50
    - Food > 20
    - Fashion > 400 
4. Modify the ROuting App by adding New Route for 'delete' abd adding the 'DeleteComponent'
  - This component will have the data shown in read-only format with a 'Delete' button
  - When this button is clicked record must be deleted     
