import { it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { TheAlert } from '#components'; 
      console.log("jdsdsalkdjaskldj");

it('can mount TheAlert', async () => {

  const component = await mountSuspended(TheAlert);
  
  expect(component).toMatchSnapshot();
});