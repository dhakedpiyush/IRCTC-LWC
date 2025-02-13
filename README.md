LWC Practice Project

This Salesforce DX project is designed for practicing and experimenting with Lightning Web Components (LWC), Apex classes, Visualforce pages, Aura components, and API integrations. The project demonstrates best practices in code documentation and structure.

----------------------------------------------------

Table of Contents

- Project Overview
- Project Structure
- Prerequisites
- Setup and Deployment
- Code Documentation Guidelines
  - Apex Classes
  - Lightning Web Components
  - Visualforce Pages
- Useful Resources
- Contributing

----------------------------------------------------

Project Overview

This repository is set up to:
- Practice building and deploying Lightning Web Components.
- Write well-documented Apex classes that can be used for API integrations and backend logic.
- Develop Visualforce pages and Aura components for legacy support and custom UIs.
- Follow Salesforce DX best practices for source control and deployment.

----------------------------------------------------

Project Structure

LWCPractice/
├── sfdx-project.json               # Salesforce DX configuration file
└── force-app/
    └── main/
        └── default/
            ├── classes/            # Apex classes and test classes
            │   ├── ExampleController.cls
            │   └── ExampleController.cls-meta.xml
            ├── lwc/                # Lightning Web Components
            │   └── myComponent/
            │       ├── myComponent.js
            │       ├── myComponent.html
            │       ├── myComponent.js-meta.xml
            │       └── myComponent.css
            ├── pages/              # Visualforce pages
            │   ├── ExamplePage.page
            │   └── ExamplePage.page-meta.xml
            └── aura/               # Aura components (if applicable)

----------------------------------------------------

Prerequisites

- Salesforce CLI: Install from https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm
- Visual Studio Code: With Salesforce Extensions Pack
- Salesforce DX Enabled Org: For source deployment and testing
- Node.js: For any LWC tooling and package management

----------------------------------------------------

Setup and Deployment

1. Clone the Repository:

   git clone https://github.com/dhakedpiyush/LWCPractice.git
   cd LWCPractice

2. Authorize Your Salesforce Org:

   sfdx force:auth:web:login -a DevOrg

3. Deploy Source to Your Org:

   sfdx force:source:push

4. Open Your Org:

   sfdx force:org:open

----------------------------------------------------

Code Documentation Guidelines

This project uses inline code documentation to ensure that the codebase is clear, maintainable, and useful for other developers.

Apex Classes:

Example:

/**
 * ExampleController handles account retrieval and basic business logic.
 *
 * This class demonstrates how to query Salesforce records using SOQL.
 * It is designed for educational purposes and can be extended for more complex operations.
 *
 */
public with sharing class ExampleController {

    /**
     * Retrieves a list of Account records.
     *
     * @return List<Account> A list of account records limited to 10 entries.
     */
    public static List<Account> getAccounts() {
        return [SELECT Id, Name FROM Account LIMIT 10];
    }
}

Lightning Web Components:

Example: myComponent.js

/**
 * @module myComponent
 * @description A Lightning Web Component that displays and updates a greeting message.
 */
import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
    greeting = 'Hello, Salesforce!';

    /**
     * Handles input change events to update the greeting message.
     *
     * @param {Event} event - The input change event.
     */
    handleChange(event) {
        this.greeting = event.target.value;
    }
}

Visualforce Pages:

Example: ExamplePage.page

<apex:page controller="ExampleController">
    <!-- 
        ExamplePage demonstrates how to use Visualforce with an Apex controller.
        It displays a list of Account names retrieved from the controller.
    -->
    <apex:repeat value="{!accounts}" var="acc">
        <p>{!acc.Name}</p>
    </apex:repeat>
</apex:page>

----------------------------------------------------

Useful Resources

- Salesforce DX Developer Guide: https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm
- Salesforce Extensions Documentation: https://developer.salesforce.com/tools/vscode/
- Salesforce CLI Command Reference: https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm
- Salesforce API Documentation: https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/

----------------------------------------------------

Contributing

Contributions are welcome! If you find issues or have suggestions for improvements, please open an issue or submit a pull request. When contributing, please adhere to the following guidelines:

- Follow the Salesforce DX Developer Guide.
- Ensure all code is well-documented using inline comments and proper Javadoc-style comments for Apex.
- Maintain the existing project structure unless a change is necessary.

----------------------------------------------------

Happy Coding!
