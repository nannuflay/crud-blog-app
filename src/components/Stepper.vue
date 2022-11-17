<template>
  <div class="w-4/6 h-[700px] border bg-white mx-auto rounded-lg shadow-xl p-6">
    <header>
      <slot name="header"></slot>
    </header>
    <!-- STEPPER  -->
    <div class="steps w-full p-3 flex flex-col min-h-full relative">
      <!-- STEP 1  -->
      <div class="step-1">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Title:</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
      </div>
      <div class="actions absolute bottom-7 right-0 flex">
        <button class="btn mr-3">Previous</button>
        <button class="btn btn-accent text-white" @click="this.uploadVideo">
          Next
        </button>
      </div>
    </div>
  </div>
</template>
