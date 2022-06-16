/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { storiesOf } from '@storybook/react';

import {
  SmallExample,
  SmallWithDescriptionExample,
  SmallWithSubtitleDescriptionExample,
  LargeExample,
  LargeWithDescriptionExample,
  LargeWithSubtitleDescriptionExample,
  MixedExample,
} from './examples';

storiesOf('bpk-component-price', module)
  .add('Small view', SmallExample)
  .add('Small view with description', SmallWithDescriptionExample)
  .add(
    'Small view with subtitle and description',
    SmallWithSubtitleDescriptionExample,
  )
  .add('Large view', LargeExample)
  .add('Large view with description', LargeWithDescriptionExample)
  .add(
    'Large view with subtitle and description',
    LargeWithSubtitleDescriptionExample,
  )
  .add('Visual test', MixedExample);