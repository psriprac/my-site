import Table from "react-bootstrap/Table";

import "./static/css/Proficiencies.css";

const Proficiencies = () => (
    <>
        <div className="Skills-List">
            <ul>
                <li><h6>Languages</h6></li>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>C++</li>
                    <li>Python</li>
                </ul>
                <br />
                <li><h6>IT Solutions</h6></li>
                <ul>
                    <li>Active Directory</li>
                    <li>VMware vSphere</li>
                    <li>VMware Horizon</li>
                    <li>VMware App Volumes</li>
                    <li>HCL BigFix</li>
                    <li>PowerShell</li>
                    <li>ServiceNow IT Service Management</li>
                    <li>ServiceNow Hardware Asset Management</li>
                </ul>
                <br />
                <li><h6>Administrative</h6></li>
                <ul>
                    <li>Leadership</li>
                    <li>Interpersonal Communication</li>
                    <li>Teamwork</li>
                    <li>Organization</li>
                </ul>
            </ul>
            </div>
            <div className="Skills-Table">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Languages</th>
                        <th>IT Solutions</th>
                        <th>Administrative</th>
                    </tr>
                </thead>
                <tbody>
                    <td>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>C++</li>
                            <li>Python</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Active Directory</li>
                            <li>VMware vSphere</li>
                            <li>VMware Horizon</li>
                            <li>VMware App Volumes</li>
                            <li>HCL BigFix</li>
                            <li>PowerShell</li>
                            <li>ServiceNow IT Service Management</li>
                            <li>ServiceNow Hardware Asset Management</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Leadership</li>
                            <li>Interpersonal Communication</li>
                            <li>Teamwork</li>
                            <li>Organization</li>
                        </ul>
                    </td>
                </tbody>
            </Table>
        </div>
    </>
)

export default Proficiencies;