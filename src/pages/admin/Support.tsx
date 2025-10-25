import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, AlertCircle, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Support() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Support & Communication</h2>
        <p className="text-muted-foreground">
          Manage user inquiries and feedback
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
            <MessageSquare className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Awaiting response</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">148</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact Forms</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">New submissions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Response</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4h</div>
            <p className="text-xs text-muted-foreground">Response time</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Contact Form Submissions</CardTitle>
          <CardDescription>Latest inquiries from your contact page</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                name: "John Smith",
                email: "john@example.com",
                subject: "Website Development Inquiry",
                time: "10 minutes ago",
                status: "new",
              },
              {
                name: "Sarah Johnson",
                email: "sarah@company.com",
                subject: "Security Consultation",
                time: "1 hour ago",
                status: "in-progress",
              },
              {
                name: "Mike Davis",
                email: "mike@startup.io",
                subject: "UI/UX Design Services",
                time: "3 hours ago",
                status: "in-progress",
              },
              {
                name: "Emily Brown",
                email: "emily@business.com",
                subject: "General Question",
                time: "5 hours ago",
                status: "resolved",
              },
            ].map((submission, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{submission.name}</h4>
                    <Badge
                      variant="outline"
                      className={
                        submission.status === "new"
                          ? "bg-blue-50 text-blue-700"
                          : submission.status === "in-progress"
                          ? "bg-yellow-50 text-yellow-700"
                          : "bg-green-50 text-green-700"
                      }
                    >
                      {submission.status.replace("-", " ")}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{submission.email}</p>
                  <p className="text-sm font-medium mt-1">{submission.subject}</p>
                  <p className="text-xs text-muted-foreground mt-1">{submission.time}</p>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feedback & Bug Reports</CardTitle>
          <CardDescription>User-submitted feedback and issues</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                user: "user@example.com",
                type: "Feature Request",
                message: "Would love to see dark mode support",
                priority: "medium",
              },
              {
                user: "test@example.com",
                type: "Bug Report",
                message: "Contact form not submitting on mobile",
                priority: "high",
              },
              {
                user: "feedback@user.com",
                type: "Feedback",
                message: "Great website design!",
                priority: "low",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                <AlertCircle
                  className={`h-5 w-5 mt-0.5 ${
                    item.priority === "high"
                      ? "text-red-600"
                      : item.priority === "medium"
                      ? "text-yellow-600"
                      : "text-blue-600"
                  }`}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{item.type}</h4>
                    <Badge variant="outline" className="text-xs">
                      {item.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{item.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">From: {item.user}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
