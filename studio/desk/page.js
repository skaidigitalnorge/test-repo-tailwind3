import S from "@sanity/desk-tool/structure-builder";
import { Icon } from "../icon";
import React from "react";
import { CgTemplate } from "react-icons/cg";
import { ImHome } from "react-icons/im";
import { BsPersonSquare } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import { BiError, BiShoppingBag } from "react-icons/bi";
import { MdOutlineMessage } from "react-icons/md";

// prettier-ignore
export const page = S.listItem()
  .title('Sider')
  .schemaType('page')
  .icon(CgTemplate)
  .child(
    S.list()
    .title('Forsiden')
    .items([
      // Front page
      // 
      S.listItem()
      .title('Forsiden')
      .icon(ImHome)
      .child(
        S.editor()
        .title('Forsiden')
        .schemaType('page')
        .documentId('frontPage')
        ),

        // About page
        // 
        S.listItem()
        .title('Om-siden')
        .icon(BsPersonSquare)
      .child(
        S.editor()
        .title('Om-siden')
        .schemaType('page')
        .documentId('aboutPage')
      ),

      // Error page
      // 
        S.listItem()
        .title('Error')
        .icon(BiError)
      .child(
        S.editor()
        .title('Error')
        .schemaType('page')
        .documentId('errorPage')
      ),

      // Contact page
      // 
        S.listItem()
        .title('Konktaktside')
        .icon(MdOutlineMessage)
      .child(
        S.editor()
        .title('kontaktSide')
        .schemaType('page')
        .documentId('contactPage')
      ),

      // Shop all page
      // 
        S.listItem()
        .title('Shop all')
        .icon(BiShoppingBag)
      .child(
        S.editor()
        .title('Shop all')
        .schemaType('page')
        .documentId('shopAllPage')
      ),
        
      // Other pages
      S.divider(),
      S.listItem()
      .title('Andre sider')
      .icon(MdWeb)
      .child(
        S.documentTypeList('page')
      ),
      S.divider(),
    ])
  )
