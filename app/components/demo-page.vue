<style>
  .inm-input-100 {
    width:100%;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 20px;
  }


  @media screen and (min-width: 800px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
    .span2 {
      grid-column: span 2;
    }
   
  }
  
  

</style>

<template>
  <form id="form1">
    <section style="border:1px solid red;max-width:600px;" class="grid" id="section-a">
  
      <div class="span2">
          <label for="select1" class="inm-label--required">Organization</label>
          <select
            id="select1"
            class="inm-select--js">
          </select>
      </div>

      <div>
          <label for="select2" class="inm-label--required">GTIN Type</label>
          <select 
            id="select2"
            class="inm-select--js"></select>
      </div>

      <div>
          <label for="input1" class="inm-label--required">GTIN</label>
          <input id="input1" class="inm-input inm-input-100" />
      </div>
    
      <div>
          <label class="inm-label">NDC Type</label>
          <select 
            id="select3"
            class="inm-select--js" >
              <option value="">&lt;Select One&gt;</option>
          </select>
      </div>

      <div>
          <label for="input2" class="inm-label">NDC</label>
          <input id="input2" class="inm-input inm-input-100" />
      </div>

      <div>
          <label for="input3" class="inm-label--required">Description</label>
          <input id="input3" class="inm-input inm-input-100" />
      </div>
  
      <div style="display:flex;align-items:flex-end;">
          <label class="inm-checkbox">
              <input type="checkbox" class="inm-checkbox__field" />
              Is Medical Waste?
          </label>
      </div>
 
      <div>
          <label class="inm-label--required">Manufacturer Product Category</label>
          <select 
            id="select4" 
            class="inm-select--js">
              <option value="">&lt;Select One&gt;</option>
          </select>
      </div>

      <div>
          <label for="input4" class="inm-label">Manufacturer Product Family</label>
          <input id="input4" class="inm-input inm-input-100" maxlength="50" />
      </div>

  </section>
  </form>
</template>

<script>

  export default {

  }
</script>