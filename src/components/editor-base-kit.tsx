// import { BaseAlignKit } from './plugins/align-base-kit';
// import { BaseBasicBlocksKit } from './plugins/basic-blocks-base-kit';
// import { BaseBasicMarksKit } from './plugins/basic-marks-base-kit';
// import { BaseCalloutKit } from './plugins/callout-base-kit';
// import { BaseCodeBlockKit } from './plugins/code-block-base-kit';
// import { BaseColumnKit } from './plugins/column-base-kit';
// import { BaseCommentKit } from './plugins/comment-base-kit';
// import { BaseDateKit } from './plugins/date-base-kit';
// import { BaseFontKit } from './plugins/font-base-kit';
// import { BaseLineHeightKit } from './plugins/line-height-base-kit';
// import { BaseLinkKit } from './plugins/link-base-kit';
// import { BaseListKit } from './plugins/list-base-kit';
// import { MarkdownKit } from './plugins/markdown-kit';
// import { BaseMathKit } from './plugins/math-base-kit';
// import { BaseMediaKit } from './plugins/media-base-kit';
// import { BaseMentionKit } from './plugins/mention-base-kit';
// import { BaseSuggestionKit } from './plugins/suggestion-base-kit';
// import { BaseTableKit } from './plugins/table-base-kit';
// import { BaseTocKit } from './plugins/toc-base-kit';
// import { BaseToggleKit } from './plugins/toggle-base-kit';

import { BaseAlignKit } from "./align-base-kit";
import { BaseBasicBlocksKit } from "./basic-blocks-base-kit";
import { BaseBasicMarksKit } from "./basic-marks-base-kit";
import { BaseCalloutKit } from "./callout-base-kit";
import { BaseCodeBlockKit } from "./code-block-base-kit";
import { BaseColumnKit } from "./column-base-kit";
import { BaseCommentKit } from "./comment-base-kit";
import { BaseDateKit } from "./date-base-kit";
import { BaseFontKit } from "./font-base-kit";
import { BaseLineHeightKit } from "./line-height-base-kit";
import { BaseLinkKit } from "./link-base-kit";
import { BaseListKit } from "./list-base-kit";
import { MarkdownKit } from "./markdown-kit";
import { BaseMathKit } from "./math-base-kit";
import { BaseMediaKit } from "./media-base-kit";
import { BaseMentionKit } from "./mention-base-kit";
import { BaseSuggestionKit } from "./suggestion-base-kit";
import { BaseTableKit } from "./table-base-kit";
import { BaseTocKit } from "./toc-base-kit";
import { BaseToggleKit } from "./toggle-base-kit";

export const BaseEditorKit = [
  ...BaseBasicBlocksKit,
  ...BaseCodeBlockKit,
  ...BaseTableKit,
  ...BaseToggleKit,
  ...BaseTocKit,
  ...BaseMediaKit,
  ...BaseCalloutKit,
  ...BaseColumnKit,
  ...BaseMathKit,
  ...BaseDateKit,
  ...BaseLinkKit,
  ...BaseMentionKit,
  ...BaseBasicMarksKit,
  ...BaseFontKit,
  ...BaseListKit,
  ...BaseAlignKit,
  ...BaseLineHeightKit,
  ...BaseCommentKit,
  ...BaseSuggestionKit,
  ...MarkdownKit,
];
