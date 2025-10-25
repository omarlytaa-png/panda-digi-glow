import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Database, Server, FileCode, Terminal, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Developer() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Developer Tools</h2>
        <p className="text-muted-foreground">
          Technical tools for managing your site's backend
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Status</CardTitle>
            <Server className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Healthy</div>
            <p className="text-xs text-muted-foreground">Response time: 45ms</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Database</CardTitle>
            <Database className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Online</div>
            <p className="text-xs text-muted-foreground">Connections: 8/100</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cache</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95.2%</div>
            <p className="text-xs text-muted-foreground">Hit rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uptime</CardTitle>
            <Server className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.9%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>Manage your API keys and endpoints</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <Code className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Production API Key</div>
                  <div className="text-sm text-muted-foreground font-mono">
                    pk_live_••••••••••••••••
                  </div>
                </div>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700">Active</Badge>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <Code className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Development API Key</div>
                  <div className="text-sm text-muted-foreground font-mono">
                    pk_test_••••••••••••••••
                  </div>
                </div>
              </div>
              <Badge variant="outline" className="bg-blue-50 text-blue-700">Test</Badge>
            </div>
          </div>
          <Button variant="outline" className="mt-4">
            Generate New Key
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Database Status</CardTitle>
            <CardDescription>Monitor database performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Tables</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Total Records</span>
                <span className="font-medium">5,482</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Storage Used</span>
                <span className="font-medium">42.3 MB</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Active Connections</span>
                <span className="font-medium">8</span>
              </div>
              <Button variant="outline" className="w-full">
                <Database className="h-4 w-4 mr-2" />
                View Database
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Server Logs</CardTitle>
            <CardDescription>Recent server activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 bg-muted rounded">
                <span className="text-green-600">[INFO]</span> Server started on port 3000
              </div>
              <div className="p-2 bg-muted rounded">
                <span className="text-blue-600">[API]</span> GET /api/users - 200 OK (45ms)
              </div>
              <div className="p-2 bg-muted rounded">
                <span className="text-blue-600">[API]</span> POST /api/auth - 200 OK (120ms)
              </div>
              <div className="p-2 bg-muted rounded">
                <span className="text-green-600">[INFO]</span> Cache refreshed successfully
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">
              <Terminal className="h-4 w-4 mr-2" />
              View Full Logs
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common developer tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-3">
            <Button variant="outline" className="justify-start">
              <RefreshCw className="h-4 w-4 mr-2" />
              Clear Cache
            </Button>
            <Button variant="outline" className="justify-start">
              <Database className="h-4 w-4 mr-2" />
              Backup Database
            </Button>
            <Button variant="outline" className="justify-start">
              <FileCode className="h-4 w-4 mr-2" />
              View API Docs
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
