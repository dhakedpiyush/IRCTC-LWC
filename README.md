# LWC Practice Project

This Salesforce DX project is designed for practicing and experimenting with Lightning Web Components (LWC), Apex classes, Visualforce pages, Aura components, and API integrations. It demonstrates best practices in code documentation, project structure, and external API integrations.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup and Deployment](#setup-and-deployment)
- [IRCTC Train Services Module Documentation](#irctc-train-services-module-documentation)
  - [Apex Class: IRCTCTrainService](#apex-class-irctctrainservice)
  - [Lightning Web Component: IrctcTrainStatus](#lightning-web-component-irctctrainstatus)
- [Useful Resources](#useful-resources)
- [Contributing](#contributing)

---

## Project Overview

This repository is set up to:
- Practice building and deploying Lightning Web Components.
- Write well-documented Apex classes for API integrations and backend logic.
- Develop Visualforce pages and Aura components for legacy support and custom UIs.
- Follow Salesforce DX best practices for source control and deployment.

---

## Project Structure

A sample structure of the repository is shown below:

```
LWCPractice/
├── sfdx-project.json
└── force-app/
    └── main/
        └── default/
            ├── classes/            # Apex classes and test classes
            ├── lwc/                # Lightning Web Components
            │   └── irctcTrainStatus/
            ├── pages/              # Visualforce pages
            └── aura/               # Aura components (if applicable)
```

---

## Prerequisites

- **Salesforce CLI:** [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- **Visual Studio Code:** With [Salesforce Extensions Pack](https://developer.salesforce.com/tools/vscode/)
- **Salesforce DX Enabled Org:** For source deployment and testing
- **Node.js:** For any LWC tooling and package management

---

## Setup and Deployment

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/dhakedpiyush/LWCPractice.git
   cd LWCPractice
   ```

2. **Authorize Your Salesforce Org:**

   ```bash
   sfdx force:auth:web:login -a DevOrg
   ```

3. **Deploy Source to Your Org:**

   ```bash
   sfdx force:source:push
   ```

4. **Open Your Org:**

   ```bash
   sfdx force:org:open
   ```

---

## IRCTC Train Services Module Documentation

This module demonstrates how to integrate external train information APIs into Salesforce using Apex callouts and Lightning Web Components (LWC). The module provides two core functionalities:

### Apex Class: IRCTCTrainService

- **Purpose:**  
  Provides two `@AuraEnabled` methods to retrieve train data from an external API:
  - **Live Train Status:** Retrieves current train status, including delays and journey details.
  - **Train Schedule:** Retrieves the schedule and route information for a given train number..

- **Highlights:**
  - Validates input parameters.
  - Constructs API endpoint URLs with proper URL encoding.
  - Sets required HTTP headers and sends HTTP GET requests.
  - Returns API responses or throws exceptions on errors.

### Lightning Web Component: IrctcTrainStatus

- **Purpose:**  
  Offers a user interface for interacting with the IRCTC Train Services. Users can:
  - Select between "Live Train Status" and "Train Schedule" features.
  - Enter a train number and optionally a start day for live status.
  - View detailed train information, including status, schedule, and route details.

- **Highlights:**
  - **Dynamic UI:**  
    Uses comboboxes and input fields to capture user selections.
  - **Conditional Rendering:**  
    Displays loading spinners, error messages, and data based on API responses.
  - **Data Processing:**  
    Parses and formats API response data for user-friendly presentation (e.g., converting minutes into HH:MM format).

---

## Useful Resources

- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Lightning Web Components Developer Guide](https://developer.salesforce.com/docs/component-library/documentation/en/lwc)
- [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
- [RapidAPI Documentation](https://rapidapi.com/)

---

## Contributing

Contributions are welcome! When submitting enhancements or bug fixes, please ensure:
- The code follows the existing project style and documentation standards.
- Inline comments and documentation are maintained or improved.
- Adequate testing is performed to ensure the functionality of API integrations.

---

```