import app from 'flarum/admin/app';
import Extend from 'flarum/common/extenders';

const t = (key: string) => app.translator.trans(`tryhackx-cover-studio.admin.${key}`);

export default [
  new Extend.Admin()
    .setting(() => ({
      setting: 'tryhackx-cover-studio.max_size',
      type: 'number',
      min: 64,
      max: 20480,
      label: t('max_size_label'),
      help: t('max_size_help'),
    }))
    .setting(() => ({
      setting: 'tryhackx-cover-studio.cover_height',
      type: 'number',
      min: 96,
      max: 600,
      label: t('cover_height_label'),
      help: t('cover_height_help'),
    }))
    .setting(() => ({
      setting: 'tryhackx-cover-studio.cover_height_mobile',
      type: 'number',
      min: 96,
      max: 600,
      label: t('cover_height_mobile_label'),
    }))
    .setting(() => ({
      setting: 'tryhackx-cover-studio.overlay',
      type: 'select',
      options: {
        gradient: t('overlay_gradient'),
        darken: t('overlay_darken'),
        none: t('overlay_none'),
      },
      default: 'gradient',
      label: t('overlay_label'),
      help: t('overlay_help'),
    }))
    .setting(() => ({
      setting: 'tryhackx-cover-studio.show_on_popover',
      type: 'boolean',
      label: t('show_on_popover_label'),
      help: t('show_on_popover_help'),
    }))
    .setting(() => ({
      setting: 'tryhackx-cover-studio.show_on_directory',
      type: 'boolean',
      label: t('show_on_directory_label'),
      help: t('show_on_directory_help'),
    }))
    .setting(() => ({
      setting: 'tryhackx-cover-studio.media_picker',
      type: 'boolean',
      label: t('media_picker_label'),
      help: t('media_picker_help'),
    }))
    .setting(() => ({
      setting: 'tryhackx-cover-studio.avatar_focus',
      type: 'boolean',
      label: t('avatar_focus_label'),
      help: t('avatar_focus_help'),
    }))
    .setting(() => ({
      setting: 'tryhackx-cover-studio.default_cover_url',
      type: 'url',
      placeholder: 'https://example.com/default-cover.jpg',
      label: t('default_cover_label'),
      help: t('default_cover_help'),
    }))
    .permission(
      () => ({
        icon: 'fas fa-panorama',
        label: t('permission.set_cover'),
        permission: 'tryhackx-cover-studio.setCover',
      }),
      'start'
    ),
];
