// IMPORTANDO OS COMPONENTES//
import React from 'react';

function Input(props) {
  const { placeholder, icon } = props;
  return(
      <>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <i class={`bi ${icon}`}></i>
            </span>
          </div>
          <input type="text" class="form-control" placeholder={`${placeholder}`} aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </>
    );
}

// EXPORTANDO OS COMPONENTES //
export { Input };